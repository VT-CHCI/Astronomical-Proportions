require 'test_helper'

class InteractionLogsControllerTest < ActionController::TestCase
  setup do
    @interaction_log = interaction_logs(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:interaction_logs)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create interaction_log" do
    assert_difference('InteractionLog.count') do
      post :create, interaction_log: @interaction_log.attributes
    end

    assert_redirected_to interaction_log_path(assigns(:interaction_log))
  end

  test "should show interaction_log" do
    get :show, id: @interaction_log
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @interaction_log
    assert_response :success
  end

  test "should update interaction_log" do
    put :update, id: @interaction_log, interaction_log: @interaction_log.attributes
    assert_redirected_to interaction_log_path(assigns(:interaction_log))
  end

  test "should destroy interaction_log" do
    assert_difference('InteractionLog.count', -1) do
      delete :destroy, id: @interaction_log
    end

    assert_redirected_to interaction_logs_path
  end
end
