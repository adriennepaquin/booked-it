class AuditionsController < ApplicationController
    # skip_before_action :authorize
    # def index
    #     user = UserAudition.where(user_id: 1)
    #     byebug
    #     user.each
    #     render json: user
    # end
    # before_action :authenticate

    def create
        location = Location.find_by(id: params[:location_id])
        
        if location
            location_id = location.id
            # render json: location
        else
            all_location = Location.find_by(name: params[:location][:name])
            # byebug
            if all_location
                location_id = all_location.id
                # render json: all_location
            else
                new_location = Location.create(name: params[:location][:name], address: params[:location][:address])
                if new_location.valid?
                    location_id = new_location.id
                    # render json: new_location
                else
                    render json: { errors: new_location.errors.full_messages}
                end
            end
        end
        # byebug
        casting = Casting.find_by(id: params[:casting_id])
        
        if casting
            casting_id = casting.id
            # render json: casting
        else
            all_casting = Casting.find_by(agency: params[:casting][:agency])
            # byebug
            if all_casting
                casting_id = all_casting.id
                # render json: all_casting
            else
                new_casting = Casting.create(agency: params[:casting][:agency])
                if new_casting.valid?
                    casting_id = new_casting.id
                    # render json: new_casting
                else
                    render json: { errors: new_casting.errors.full_messages}
                end
            end
        end
        # byebug
        monologue = Monologue.find_by(id: params[:monologue_id])
        
        if monologue
            monologue_id = monologue.id
            user = monologue.user_id
            # render json: monologue
        else
            all_monologue = Monologue.find_by(role: params[:monologue][:role])
            # byebug
            if all_monologue
                monologue_id = all_monologue.id
                user = all_monologue.user_id
                # render json: all_monologue
            else
                new_monologue = Monologue.create(role: params[:monologue][:role], play: params[:monologue][:play], playwright: params[:monologue][:playwright], public: params[:monologue][:public], genre: params[:monologue][:genre], length: params[:monologue][:length], first_line: params[:monologue][:first_line], user_id: params[:monologue][:user_id])
                if new_monologue.valid?
                    monologue_id = new_monologue.id
                    # render json: new_monologue
                else
                    render json: { errors: new_monologue.errors.full_messages}
                end
            end
        end
        # byebug
        audition = Audition.create(appointment: params[:appointment], booked: params[:booked], callback: params[:callback], casting_id: casting_id, date: params[:date], location_id: location_id, monologue_id: monologue_id, outfit: params[:outfit], producer: params[:producer], response: params[:response], shows: params[:shows], time: params[:time],)
        if audition.valid?
            audition_id = audition.id
            # render json: audition
        else
            render json: {errors: audition.errors.full_messages}
        end
        # byebug
        user_audition = UserAudition.create(audition_id: audition_id, user_id: 2)
        if user_audition.valid?
            # byebug
            render json: user_audition, only: :audition
        else
            # byebug
            render json: {errors: user_audition.errors.full_messages}, status: :unprocessable_entity
        end
    end
end
