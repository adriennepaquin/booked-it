class UsersController < ApplicationController
    # skip_before_action :authorize, only: [:index, :create]
    before_action :authenticate, only: [:me]

    def login
        user = User.find_by(username: params[:user][:username])
        # byebug
        if user && user.authenticate(params[:user][:password])
            render json: user
        else
            render json: {errors: ["Invalid username or password"]}, status: :unauthorized
        end
    end

    def me
        render json: @current_user
    end

    def signup
        user = User.create(user_params)
    end

    def index
        users = User.all
        render json: users
    end

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def user_params
        params.permit(:name, :username, :password, :password_confirmation)
    end
end
