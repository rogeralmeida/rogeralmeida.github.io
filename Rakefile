require 'aws-sdk'
require 'logger'
require 'digest'

logger = Logger.new(STDOUT)
logger.level = Logger::INFO

desc 'Deploy the blog to s3'
task :deploy do
  Aws.config = {
    access_key_id: ENV["AWS_ACCESS_KEY_ID"],
    secret_access_key: ENV["AWS_SECRET_ACCESS_KEY"],
    region: 'ap-southeast-2'
  }
  s3 = Aws::S3::Client.new
  Dir.chdir("_site")

  Dir["**/*"].each do |file|
    logger.info "File: #{file}"
    if File.directory?(file)
      logger.info "#{file} is a directory"
      options = {acl: "public-read",
                 bucket: 'roger-almeida.com',
                 body: '',
                 tagging: "content_md5=",
                 key: "#{file}/"
      }
      s3.put_object(options)
      next
    end
    body = File.read(file)

    md5 = Digest::MD5.new
    md5.update(body)
    md5_local_file = md5.hexdigest
    logger.info "Local file MD5: #{md5_local_file}"
    md5_remote_file  = nil
    begin
      remote_file_head = s3.get_object_tagging({
        bucket: 'roger-almeida.com',
        key: file
      })
      logger.info "Remote tags: #{remote_file_head}"
      md5_remote_file = remote_file_head.tag_set.empty? ? nil : remote_file_head.tag_set[0].value
    rescue Aws::S3::Errors::NoSuchKey
      logger.info "File doesnt exist remotelly"
    end
    logger.info "Remote file MD5: #{md5_remote_file}"

    next if md5_local_file == md5_remote_file
    logger.info "Sending file #{file}"
    options = {acl: "public-read",
               bucket: 'roger-almeida.com',
               body: body,
               tagging: "content_md5=#{md5_local_file}",
               key: file
    }
    s3.put_object(options)
  end
end
