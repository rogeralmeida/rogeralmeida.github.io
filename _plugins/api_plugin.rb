require 'logger'
require 'fileutils'
require 'json'

Jekyll::Hooks.register :site, :post_write do |site|
    logger = Logger.new(STDOUT)
    logger.level = Logger::INFO
    logger.info site.print_stats

    post_list = []
    site.posts.docs.each do |post|
        json_file = {
            title: post.data[:title],
            excerpt: post.data[:excerpt],
            url: post.url
        }
        new_file = "#{Dir.pwd}/_site/api#{post.url}.json"
        dirname = File.dirname(new_file)
        unless File.directory?(dirname)
            FileUtils.mkdir_p(dirname)
        end
        File.open(new_file, "w") do |file|
            logger.info "Creating file: #{file.path}"
            file.write(json_file.to_json)
        end
        post_list << json_file
    end
    File.open("#{Dir.pwd}/_site/api/all.json", "w") do |file|
        logger.info "Creating all file: #{file.path}"
        file.write(post_list.to_json)
    end
end