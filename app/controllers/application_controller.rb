class ApplicationController < ActionController::API
    include ActionController::Cookies

    # before_action :authorize

    # private

    # def authorize
    #     # @current_user = User.find_by(id: session[:user_id])
    #     # return render json: { error: "Not authorized" }, status: :unauthorized unless @current_user
    #     return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    # end
end
