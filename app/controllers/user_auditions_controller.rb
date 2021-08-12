class UserAuditionsController < ApplicationController
    skip_before_action :authorize

    def show
        user_auditions = UserAudition.where(user_id: params[:id])
        render json: user_auditions
    end
end
