class UserAuditionsController < ApplicationController
    skip_before_action :authorize

    def show
        user_auditions = UserAudition.where(user_id: params[:id])
        byebug
        auditions = user_auditions.each do |index|
            byebug
            return index.audition_id
        end
        byebug
        render json: auditions
    end
end
