class LogTypesController < ApplicationController
  # GET /log_types
  # GET /log_types.json
  def index
    @log_types = LogType.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @log_types }
    end
  end

  # GET /log_types/1
  # GET /log_types/1.json
  def show
    @log_type = LogType.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @log_type }
    end
  end

  # GET /log_types/new
  # GET /log_types/new.json
  def new
    @log_type = LogType.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @log_type }
    end
  end

  # GET /log_types/1/edit
  def edit
    @log_type = LogType.find(params[:id])
  end

  # POST /log_types
  # POST /log_types.json
  def create
    @log_type = LogType.new(params[:log_type])

    respond_to do |format|
      if @log_type.save
        format.html { redirect_to @log_type, notice: 'Log type was successfully created.' }
        format.json { render json: @log_type, status: :created, location: @log_type }
      else
        format.html { render action: "new" }
        format.json { render json: @log_type.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /log_types/1
  # PUT /log_types/1.json
  def update
    @log_type = LogType.find(params[:id])

    respond_to do |format|
      if @log_type.update_attributes(params[:log_type])
        format.html { redirect_to @log_type, notice: 'Log type was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @log_type.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /log_types/1
  # DELETE /log_types/1.json
  def destroy
    @log_type = LogType.find(params[:id])
    @log_type.destroy

    respond_to do |format|
      format.html { redirect_to log_types_url }
      format.json { head :no_content }
    end
  end
end
