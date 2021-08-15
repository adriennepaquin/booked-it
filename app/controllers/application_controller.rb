class ApplicationController < ActionController::API
    # include ActionController::Cookies

    def authenticate
        auth_header = request.headers["Authorization"]
        token = auth_header.split.last
        payload = JWT.decode(token, 'bonaventure', true, { algorithm: 'HS256'})[0]
        @current_user = User.find_by(id: payload["user_id"])
    rescue
        render json: { errors: ["Not authorized"]}, status: :unauthorized
    end

    # before_action :authorize

    # private

    # def authorize
    #     # @current_user = User.find_by(id: session[:user_id])
    #     # return render json: { error: "Not authorized" }, status: :unauthorized unless @current_user
    #     return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    # end
end
