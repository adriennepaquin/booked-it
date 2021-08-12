class UserAuditionsController < ApplicationController
    # skip_before_action :authorize

    def show
        auditions = UserAudition.where(user_id: params[:id])
        # byebug
        if auditions
            render json: auditions, include: ['auditions', 'audition.location', 'audition.casting', 'audition.monologue']
        else
            render json: {error: "No auditions found"}
        end
    end
end
