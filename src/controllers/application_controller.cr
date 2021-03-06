require "jasper_helpers"

class ApplicationController < Amber::Controller::Base
  include JasperHelpers
  LAYOUT = "application.slang"

  def root
    render "application.slang"
  end

  def current_user
    context.current_user
  end
end
