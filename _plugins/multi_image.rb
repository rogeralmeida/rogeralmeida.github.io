require "mini_magick"
require 'logger'
require 'fileutils'

Jekyll::Hooks.register :site, :post_write do |site|

  if ENV['SKIP_DINAMIC_IMAGES'] != 'true'
    logger = Logger.new(STDOUT)
    logger.level = Logger::INFO
    i_sizes = [1024, 768, 640, 480, 240]
    i_extensions = ['webp', 'png']
    site.static_files.each do |file|
      if ['.png', '.jpg'].include?(file.extname) && file.path.include?("images/responsive")
        file_name = File.basename file.path, file.extname
        image = MiniMagick::Image.open(file.path)
        i_sizes.each do |size|
          image.resize "#{size}x"
          i_extensions.each do |ext|
            image.format "#{ext}"
            new_file = "#{Dir.pwd}/_site/images/responsive/#{file_name}-#{size}.#{ext}"
            logger.info "Saving new image: #{new_file}"
            image.write new_file
            raise IOError, "new image was not saved" unless File.file?(new_file)
          end
        end
      end
    end
  end
end
