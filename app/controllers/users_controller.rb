class UsersController < ApplicationController
    before_action :authenticate, only: [:me, :index]

    # POST /login
    def login
        user = User.find_by(username: params[:user][:username])
        if user && user.authenticate(params[:user][:password])            
            token = JWT.encode({user_id: user.id}, 'bonaventure', 'HS256')
            render json: { user: UserSerializer.new(user), token: token}
        else
            render json: {errors: ["Invalid username or password"]}, status: :unauthorized
        end
    end

    # GET /me
    def me
        render json: @current_user
    end

    # POST /signup
    def signup
        user = User.create(name: params[:user][:name], username: params[:user][:username], password: params[:user][:password])
        if user.valid?
            token = JWT.encode({user_id: user.id}, 'bonaventure', 'HS256')
            render json: { user: UserSerializer.new(user), token: token}, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def index
        users = User.all
        render json: users
    end

end
