class UserAuditionsController < ApplicationController
    # skip_before_action :authorize

    def show
        auditions = UserAudition.where(user_id: params[:id])
        # byebug
        if auditions
            # render json: auditions.display_people
            render json: auditions, include: ['audition.location', 'audition.casting', 'audition.monologue', 'audition.display_people']
        else
            render json: {error: "No auditions found"}
        end
    end
end
