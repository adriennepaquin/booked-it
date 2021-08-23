class UserAuditionsController < ApplicationController
    before_action :authenticate

    def show
        auditions = UserAudition.where(user_id: params[:id])
        if auditions
            render json: auditions, include: ['audition.location', 'audition.casting', 'audition.monologue', 'audition.people']
        else
            render json: {error: "No auditions found"}
        end
    end
end
