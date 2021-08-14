class MonologuesController < ApplicationController
    # skip_before_action :authorize
    
    def index
        monos = Monologue.where(public: true)
        render json: monos
    end

    def show
        my_monos = Monologue.where(user_id: params[:id])
        render json: my_monos
    end

    # def create
    #     monologue = Monologue.find_by(role: params[:role])

    #     if monologue
    #         render json: monologue
    #     else
    #         monologue = Monologue.create(monologue_params)

    #         if monologue.valid?
    #             render json: monologue
    #         else
    #             render json: {errors: monologue.errors.full_messages}, status: :unprocessable_entity
    #         end
    #     end
    # end

    private

    def monologue_params
        params.permit(:role, :play, :playwright, :public, :genre, :role, :length, :first_line, :user_id)
    end
end
