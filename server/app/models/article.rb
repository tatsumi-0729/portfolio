class Article < ApplicationRecord
  has_one_attached :avatar

  def parse_base64=(image)
    if image.present?
      # 拡張子を作る
      content_type = create_extension(image)
      contents = image.sub %r/data:((image|application)\/.{3,}),/, ''
      decoded_data = Base64.decode64(contents)
      fileName = Time.zone.now.to_s + '.' + content_type
      File.open("#{Rails.root}/tmp/#{fileName}", 'wb') do |f|
        f.write(decoded_data)
      end
      attach_image(fileName)
    end
  end

  private

  def create_extension(image)
    content_type = rex_image(image)
    content_type[%r/\b(?!.*\/).*/]
  end

  def rex_image(image)
    image[%r/(image\/[a-z]{3,4})|(application\/[a-z]{3,4})/]
  end

  def attach_image(fileName)
    avatar.attach(io: File.open("#{Rails.root}/tmp/#{fileName}"), filename: fileName)
    FileUtils.rm("#{Rails.root}/tmp/#{fileName}")
  end
end
