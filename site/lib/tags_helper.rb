# lib/tags_helper.rbS
module TagsHelper

  # find all blog posts
  def posts(limit=:all, find_options=nil)
    options = { :in_directory => 'blog', 
                :recursive => true,
                :blog_post => true,
                :sort_by => "created_at",
                :reverse => true}
    options.merge!(find_options) if find_options
    ::Webby::Resources.pages.find(limit, options)
  end
  
  def tags_hash
    return @tags_hash if @tags_hash
    @tags_hash = {}
    posts.each do |post|
      post.tags.each do |tag|
        @tags_hash[tag] ||=0
        @tags_hash[tag] += 1
      end if post.tags
    end
    @tags_hash
  end
  
  def posts_with_tag(tag, limit=:all, find_options=nil)
    posts(limit, find_options) do |post|
      post.tags && post.tags.include?(tag)
    end
  end
end

Webby::Helpers.register(TagsHelper)
