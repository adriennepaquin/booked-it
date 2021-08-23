class AuditionsController < ApplicationController
    before_action :authenticate
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    # GET
    def index
        auditions = Audition.all
        render json: auditions
    end

    # GET /:id
    def show
        user_auditions = UserAudition.where(user_id: params[:id])
        if user_auditions
            auditions = user_auditions.map{|aud| aud.audition}
            render json: auditions
        else
            render json: {error: "No auditions found"}
        end
    end

    # POST /create
    def create
        # add location if it doesn't already exist
        location = Location.find_by(id: params[:location_id])
        if location
            location_id = location.id
        else
            all_location = Location.find_by(name: params[:location][:name])
            if all_location
                location_id = all_location.id
            else
                new_location = Location.create(name: params[:location][:name], address: params[:location][:address])
                if new_location.valid?
                    location_id = new_location.id
                else
                    render json: { errors: new_location.errors.full_messages }, status: :unprocessable_entity and return
                end
            end
        end

        # add casting if it doesn't already exist
        casting = Casting.find_by(id: params[:casting_id])        
        if casting
            casting_id = casting.id
        else
            all_casting = Casting.find_by(agency: params[:casting][:agency])
            if all_casting
                casting_id = all_casting.id
            else
                new_casting = Casting.create(agency: params[:casting][:agency])
                if new_casting.valid?
                    casting_id = new_casting.id
                else
                    render json: { errors: new_casting.errors.full_messages}, status: :unprocessable_entity and return
                end
            end
        end

        # add monologue if it doesn't already exist
        monologue = Monologue.find_by(id: params[:monologue_id])
        if monologue
            monologue_id = monologue.id
            user = monologue.user_id
        else
            all_monologue = Monologue.find_by(role: params[:monologue][:role])
            if all_monologue
                monologue_id = all_monologue.id
                user = all_monologue.user_id
            else
                new_monologue = Monologue.create(role: params[:monologue][:role], play: params[:monologue][:play], playwright: params[:monologue][:playwright], public: params[:monologue][:public], genre: params[:monologue][:genre], length: params[:monologue][:length], first_line: params[:monologue][:first_line], user_id: params[:monologue][:user_id])
                if new_monologue.valid?
                    monologue_id = new_monologue.id
                else
                    render json: { errors: new_monologue.errors.full_messages}, status: :unprocessable_entity and return
                end
            end
        end
        
        # add audition to auditions table
        audition = Audition.create(appointment: params[:appointment], booked: params[:booked], callback: params[:callback], casting_id: casting_id, date: params[:date], location_id: location_id, monologue_id: monologue_id, outfit: params[:outfit], producer: params[:producer], response: params[:response], shows: params[:shows], time: params[:time],)
        if audition.valid?
            audition_id = audition.id
        else
            render json: {errors: audition.errors.full_messages}, status: :unprocessable_entity and return
        end
    
        # add people to in_the_rooms table
        people = params[:people].map do |person|
            person = Person.create(name: person)
            if person.valid?
                person_id = person.id
                in_the_room = InTheRoom.create(audition_id: audition_id, person_id: person_id)
            end
        end
     
        # add user and audition to user_auditions table
        user_audition = UserAudition.create(audition_id: audition_id, user_id: @current_user.id)
        if user_audition.valid?
            audition = Audition.find_by(id: user_audition.audition_id)
            render json: audition
        else
            render json: {errors: user_audition.errors.full_messages}, status: :unprocessable_entity
        end
    end

    # PATCH /update
    def update
        audition = Audition.find_by(id: params[:id])
        update = audition.update(booked: params[:booked], callback: params[:callback], response: params[:response])
        if update
            updated = Audition.find_by(id: params[:id])
            render json: updated
        else
            render json: {errors: audition.errors.full_messages}
        end
    end

    #DELETE /destroy
    def destroy
        audition = Audition.find_by(id: params[:id])
        if audition
            audition.destroy
            render json: audition
        else
            render json: { error: "Audition not found" }, status: :not_found
        end
    end
end
