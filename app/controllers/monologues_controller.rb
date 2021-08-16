class MonologuesController < ApplicationController
    before_action :authenticate, except: [:index, :show]
    
    def index
        monos = Monologue.where(public: true)
        render json: monos
    end

    def show
        my_monos = Monologue.where(user_id: params[:id])
        render json: my_monos
    end

    def create
        monologue = Monologue.find_by(user_id: params[:user_id], role: params[:role], play: params[:play])
        # byebug
        if monologue
            render json: { errors: ["Monologue already exists"]}, status: :unprocessable_entity
        else
            new_monologue = Monologue.create(monologue_params)
            # byebug
            if new_monologue
                render json: new_monologue
            else
                render json: {errors: monologue.errors.full_messages}, status: :unprocessable_entity
            end
        end
    end

    private

    def monologue_params
        params.permit(:role, :play, :playwright, :public, :genre, :length, :first_line, :user_id)
    end
end
