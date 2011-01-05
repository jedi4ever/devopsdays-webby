# require uv
require 'uv'
require 'enumerator'

Loquacious.configuration_for(:webby) {
  desc <<-__
    Options for CodeRay syntax highlighting. See the CodeRay home page
    (http://coderay.rubychan.de/) for more information about the available
    options.
  __
  codify {
    desc 'The language being highlighted (given as a symbol).'
    lang :ruby

    desc 'The file you want to read instead of a string'
    lang :file

    desc 'Include line numbers in :table, :inline, :list or nil (no line numbers).'
    line_numbers nil

    desc 'Where to start line number counting.'
    line_number_start 1

    desc 'Make every N-th number appear bold.'
    bold_every 10

    desc 'Tabs will be converted into this number of space characters.'
    tab_width 8
  }
}

module CodifyHelper

  # The +codify+ method applies syntax highlighting to source code embedded
  # in a webpage. The CodeRay highlighting engine is used for the HTML
  # markup of the source code. The page sections to be highlighted are given
  # as blocks of text to the +coderay+ method.
  #
  # Options can be passed to the CodeRay engine via attributes in the
  # +codify+ method.
  #
  #    <% codify( :lang => "ruby", :line_numbers => "inline" ) do -%>
  #    # Initializer for the class.
  #    def initialize( string )
  #      @str = stirng
  #    end
  #    <% end -%>
  #    
  # The supported Codify options are the following:
  #
  #    :lang               : the language to highlight (ruby, c, html, ...)
  #    :file               : the file to highlight
  #    :line_numbers       : include line numbers in 'table', 'inline',
  #                          or 'list'
  #    :line_number_start  : where to start with line number counting
  #    :bold_every         : make every n-th number appear bold
  #    :tab_width          : convert tab characters to n spaces
  #
  
  def codify( *args, &block )
    opts = args.last.instance_of?(Hash) ? args.pop : {}

    parent=File.dirname(@page.path)
     file=opts[:file]
    text=""
    if (!file.nil?) 
      begin
        filename=parent+File::SEPARATOR+file
        file=File.open(filename,"rb")
        text=file.read
        syntax=guess_syntax(filename)
        if !syntax.nil? && opts[:lang].nil? then
          opts[:lang]=syntax
       end
      rescue
        puts "Error reading code file"+filename
      end
    else
      text = capture_erb(&block)
    end
    
    return if text.empty?

   defaults = { :lang => "ruby", :line_numbers => false , :theme => "mac_classic"}
   lang = opts.getopt(:lang, defaults[:lang]).to_s
   line_numbers = opts.getopt(:line_numbers, defaults[:line_numbers])
   theme = opts.getopt(:theme, defaults[:theme])

    lang=case lang
      when "shell","sh" then "shell-unix-generic"
      when "text" then :plain_text
      else
        lang
      end
    out = %Q{<div class="UltraViolet">\n}
    out << Uv.parse(text, "xhtml", lang.to_s, false,"active4d")
    out << %Q{\n</div>}

    # put some guards around the output (specifically for textile)
    out = _guard(out)

    concat_erb(out, block.binding)
    return
  end

  def guess_syntax(filename)
    filetype=Uv.syntax_for_file(filename)[0][0]
    return filetype

  end

end  # module CodefyHelper



Webby::Helpers.register(CodifyHelper)

# EOF