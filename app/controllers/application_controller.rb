class ApplicationController < ActionController::API
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def authenticate
        auth_header = request.headers["Authorization"]
        token = auth_header.split.last
        payload = JWT.decode(token, 'bonaventure', true, { algorithm: 'HS256'})[0]
        @current_user = User.find_by(id: payload["user_id"])
    rescue
        render json: { errors: ["Not authorized"]}, status: :unauthorized
    end

   private

   def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
   end
end
