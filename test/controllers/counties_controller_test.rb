require 'test_helper'

class CountiesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get counties_index_url
    assert_response :success
  end

end
