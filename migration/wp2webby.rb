#!/usr/bin/env ruby
require 'rubygems'
require 'fileutils'
require 'rfeedparser'
require 'pp'
require 'net/http'
require 'uri'
#libxml-ruby
#rfeedparser

def write_feed(feed)
  pp feed.title
  pp feed.subtitle
  pp feed.links[0].href

  @site_url=feed.wp_base_blog_url
  #feed.wp_base_site_url
  #feed.updated
  #feed.generator
  #feed.updated_time
  #feed.updated_parsed
  #feed.wp_tag_name
  #feed.wp_tag_slug
  #feed.wp_cat_name
  #feed.wp_category_parent
  #feed.wp_category
  #feed.wp_wxr_version
end

def write_entry(e)
  #File.open(local_filename, 'w') {|f| f.write(doc) }
  
  base=e.link.gsub(@site_url+'/','').gsub(e.wp_post_name+'/', '')
  path=@webby_dir+"/"+base+'/'+e.wp_post_name
  FileUtils.mkdir_p path
  filename="index.html"
  @counter=@counter+1
  
  #write entries
  puts "[#{@counter}]creating "+path+"/"+filename
  File.open(path+"/"+filename, 'w') { |f| 
    f.write("---\n") 
    f.write("title: "+"\""+e.title+"\""+"\n")
    f.write("author: "+e.author+"\n")
    f.write("guid: "+e.guid+"\n")
    format="%Y-%m-%d %H:%M:%S.0 +00:00"
    #created_at: 2009-09-10 22:16:41.382708 +02:00
    f.write("created_at: "+ Time.parse(e.wp_post_date).strftime(format)+"\n")
    f.write("blog_post: "+ "true\n")
    f.write("filter:\n")
    f.write("  - erb\n")
    f.write("  - basepath\n")
#    f.write("  - tidy\n")

    tags=Hash.new
    categories=Hash.new
    rssterms=e.tags
    rssterms.each { |t|
      scheme=t['scheme']
      term=t['term']
      if scheme=='tag'
        tags[term]=''   
      end
      if scheme=='category'
        categories[term]=''   
      end
    }
    f.write("categories:\n")
    categories.keys.each { |c| 
      f.write("   - #{c}\n")
    }
    f.write("tags:\n")
    tags.keys.each { |c| 
      f.write("   - #{c}\n")
    }

    #f.write("  - maruku\n")
    f.write("---\n")
    #fixing empty lines to be a hard break
    f.write(e.content[0].value.gsub(/\n\n/,"\n<br>\n")) 
    
    #fixing URL's for the images and relative paths
  }
  #fixing directory urls
  
  #browsing subdirectories index.html?


  puts "---------------------------"
  
  
  return
  
  puts e.link

  puts counter.to_s+":"
  #e.wp_post_date
  pp e.wp_post_type
  pp e.title
  #e.summary_detail[0]
  #e.post_meta
  #e.wp_meta_key
  pp e.wp_post_name
  #e.wp_post_date_gmt
  pp e.author
  pp e.wp_post_id
  pp e.wp_status
  #e.wp_comment_status
  #e.summary
  #e.guidislink
  #e.title_detail[0]
  #e.wp_meta_value
  pp e.wp_post_parent
  #e.wp_ping_status
  #pp e.content[0].value
  pp e.content[0].type
  pp e.content[0].language
  pp e.links[0].href
  #e.links[0].rel
  #e.links[0].type
  pp e.link
  #e.wp_post_password
  #e.wp_menu_order
  #e.wp_post_id
  #e.excerpt_encoded
  pp e.updated
  #e.updated_time
  e.updated_parsed
  
end

def download_attachment(e)
  url=e.wp_attachment_url
  puts url
  base=@webby_dir+"/"+url.gsub(@site_url+'/','').gsub(e.wp_post_name+'/', '')
  directory=File.dirname(base)
  filename=File.basename(base)
  puts directory
  puts filename
  FileUtils.mkdir_p directory
  
  myURI = URI.parse(url)
  pp myURI
  Net::HTTP.start(myURI.host) { |http|
    resp = http.get(myURI.path)
    open(directory+'/'+filename, "wb") { |file|
      file.write(resp.body)
     }
  }
end

def write_entries(entries)
  @counter=0
  entries.each { |e|
    
    if e.wp_post_type == 'post' && e.wp_status == 'publish'

      write_entry(e)
  end

    if e.wp_post_type == 'attachment'
      #we should download it      
      download_attachment(e)
  end

  }
end

if ARGV.length < 2
  puts "Usage: wp2ruby <feed_url> <webby_dir>"
  exit
end

@feed_url=ARGV[0]
@webby_dir=ARGV[1]
@site_url=""

wpr=""
begin
  wpr=FeedParser.parse(@feed_url)
rescue
  puts "Error parsing feed"+$!
  exit
end

write_feed(wpr.feed)
write_entries(wpr.entries)
