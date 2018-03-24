require "mini_magick"
require 'logger'
require 'fileutils'

Jekyll::Hooks.register :site, :post_write do |site|

  logger = Logger.new(STDOUT)
  logger.level = Logger::INFO
  i_sizes = [1024, 768, 640, 480, 240]
  site.static_files.each do |file|
    if ['.png'].include?(file.extname) && file.path.include?("images/responsive")
      file_name = File.basename file.path, file.extname
      image = MiniMagick::Image.open(file.path)
      i_sizes.each do |size|
        new_file = "#{Dir.pwd}/_site/images/responsive/#{file_name}-#{size}.png"
        if image.width > size && !File.file?(new_file)
          image.resize "#{size}x"
          logger.info "Saving new image: #{new_file}"
          image.write new_file
          raise IOError, "new image was not saved" unless File.file?(new_file)
        end
      end
    end
  end
end
