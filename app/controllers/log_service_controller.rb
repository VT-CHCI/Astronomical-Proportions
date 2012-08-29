require 'Date'
class LogServiceController < ActionController::Base
	skip_before_filter :verify_authenticity_token

	#POST /interaction_logs/service
  def log
    puts "\n\n\n\n\n\n\n\n\n\n===========\n\n\n\n\n\n\n\n in log"
    puts params[:logs]
    puts params
    puts request.remote_ip
    puts "\n\n\n\n\n\n\n\n\n\n===========\n\n\n\n\n\n\n\n out log"
    failures = []
    params[:logs].each do |idx, log|
      if params[:application]
        log[:application_id] = Application.find_by_name(params[:application]).id
      end
      @interaction_log = InteractionLog.new(log)
      if not @interaction_log.time
        @interaction_log.time = DateTime.now
      end
      if not @interaction_log.person_id
        # if cookies[:last_user_id]
        #   @interaction_log.unknown_user_details = "last_user_id: " + cookies[:last_user_id]
        # else
          @interaction_log.unknown_user_details = "request.remote_ip: " + request.remote_ip
        # end
      end
      if not @interaction_log.save
        failures.push(@interaction_log.details)
      end
    end
    if failures.length == 0
      head :created
    else
      render :text=>"failed for: " + failures.to_s, :status => :internal_server_error
    end
  end
end