require "mini_magick"
require 'fileutils'

module MultiImage 
  class Generator < Jekyll::Generator
    def generate(site)
      FileUtils.mkdir_p("#{Dir.pwd}/_site/images/thumbnails") unless Dir.exist?("#{Dir.pwd}/_site/images/thumbnails")
      site.static_files.each do |file|
        if ['.png', '.jpg', '.jpeg'].include?(file.extname)
          file_name = File.basename file.path, file.extname
          image = MiniMagick::Image.open(file.path)
          image.resize '100x100'
          image.format 'png'
          image.write "#{Dir.pwd}/_site/images/thumbnails/#{file_name}.png"
        end
      end
    end
  end
end
