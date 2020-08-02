class ContactController < ApplicationController

  def create
    contact = Contact.create(create_param)
    if contact.save
      
    end
  end 

end
