class InteractionLogsController < ApplicationController
  # GET /interaction_logs
  # GET /interaction_logs.json
  def index
    @interaction_logs = InteractionLog.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @interaction_logs }
    end
  end

  # GET /interaction_logs/1
  # GET /interaction_logs/1.json
  def show
    @interaction_log = InteractionLog.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @interaction_log }
    end
  end

  # GET /interaction_logs/new
  # GET /interaction_logs/new.json
  def new
    @interaction_log = InteractionLog.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @interaction_log }
    end
  end

  # GET /interaction_logs/1/edit
  def edit
    @interaction_log = InteractionLog.find(params[:id])
  end

  # POST /interaction_logs
  # POST /interaction_logs.json
  def create
    @interaction_log = InteractionLog.new(params[:interaction_log])

    respond_to do |format|
      if @interaction_log.save
        format.html { redirect_to @interaction_log, notice: 'Interaction log was successfully created.' }
        format.json { render json: @interaction_log, status: :created, location: @interaction_log }
      else
        format.html { render action: "new" }
        format.json { render json: @interaction_log.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /interaction_logs/1
  # PUT /interaction_logs/1.json
  def update
    @interaction_log = InteractionLog.find(params[:id])

    respond_to do |format|
      if @interaction_log.update_attributes(params[:interaction_log])
        format.html { redirect_to @interaction_log, notice: 'Interaction log was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @interaction_log.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /interaction_logs/1
  # DELETE /interaction_logs/1.json
  def destroy
    @interaction_log = InteractionLog.find(params[:id])
    @interaction_log.destroy

    respond_to do |format|
      format.html { redirect_to interaction_logs_url }
      format.json { head :no_content }
    end
  end
end
