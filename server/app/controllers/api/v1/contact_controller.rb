class Api::V1::ContactController < ApplicationController
  # あまり良くないかも…
  skip_before_action :verify_authenticity_token

  def create
    contact = Contact.create(create_params)
    if contact.save
      render json: "success"
    else
      render json: contact.errors, status: :unprocessable_entity
    end
  end 

  private
  def create_params
      params.require(:contact).permit(:_json).map do |p|
        ActionController::Parameters.new(p)
    end
  end

end
