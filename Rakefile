require 'aws-sdk'
require 'logger'

logger = Logger.new(STDOUT)
logger.level = Logger::INFO

desc 'Deploy the blog to s3'
task :deploy do
  s3 = Aws::S3::Client.new
  Dir.chdir("_site")
  Dir["**/*"].each do |file|
    next if File.directory?(file)
    logger.info "File: #{file}"
    options = {acl: "public-read",
               bucket: 'roger-almeida.com',
               body: File.read(file),
               key: file
    }
    s3.put_object(options)
  end
end
