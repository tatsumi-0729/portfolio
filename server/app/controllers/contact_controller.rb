class ContactController < ApplicationController

  def index 
    @Contacts = Contact.all
    render json: @Contacts
  end

end
