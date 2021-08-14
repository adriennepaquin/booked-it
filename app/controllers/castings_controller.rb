class CastingsController < ApplicationController

    def index
        casting = Casting.all
        render json: casting
    end

    # def create
    #     casting = Casting.find_by(agency: params[:agency])

    #     if casting
    #         render json: casting
    #     else
    #         casting = Casting.create(casting_params)

    #         if casting.valid?
    #             render json: casting
    #         else
    #             render json: {errors: casting.errors.full_messages}, status: :unprocessable_entity
    #         end
    #     end
    # end

    private

    def casting_params
        params.permit(:agency)
    end
end
