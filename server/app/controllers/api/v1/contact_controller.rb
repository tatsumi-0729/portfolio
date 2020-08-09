class Api::V1::ContactController < ApplicationController

  def create
    contact = Contact.create(create_param)
    if contact.save
      render json: "success"
    else
      contact.errors, status: :unprocessable_entity
    end
  end 

  private
  def create_params
    params.require(:requestData).permit(:title, :email, :content)
  end

end
