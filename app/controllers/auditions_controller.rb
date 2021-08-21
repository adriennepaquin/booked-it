class AuditionsController < ApplicationController
    before_action :authenticate, except: [:index, :show]
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    # GET
    def index
        auditions = Audition.all
        render json: auditions
    end

    # GET /:id
    def show
        user_auditions = UserAudition.where(user_id: params[:id])
        # byebug
        if user_auditions
            auditions = user_auditions.map{|aud| aud.audition}
            render json: auditions
            # render json: auditions, include: ['audition.location', 'audition.casting', 'audition.monologue', 'audition.people']
        else
            render json: {error: "No auditions found"}
        end
    end

    # # POST /create
    # def create
    #     location = Location.find_by(id: params[:location_id])
        
    #     if location
    #         location_id = location.id
    #         # render json: location
    #     else
    #         all_location = Location.find_by(name: params[:location][:name])
    #         # byebug
    #         if all_location
    #             location_id = all_location.id
    #             # render json: all_location
    #         else
    #             new_location = Location.create(name: params[:location][:name], address: params[:location][:address])
    #             if new_location.valid?
    #                 location_id = new_location.id
    #                 # render json: new_location
    #             # rescue ActiveRecord::RecordInvalid
    #             else
    #                 # byebug
    #                 render json: { errors: new_location.errors.full_messages}
    #             end
    #         end
    #     end
    #     # byebug
    #     casting = Casting.find_by(id: params[:casting_id])
        
    #     if casting
    #         casting_id = casting.id
    #         # render json: casting
    #     else
    #         all_casting = Casting.find_by(agency: params[:casting][:agency])
    #         # byebug
    #         if all_casting
    #             casting_id = all_casting.id
    #             # render json: all_casting
    #         else
    #             new_casting = Casting.create(agency: params[:casting][:agency])
    #             # byebug
    #             if new_casting.valid?
    #                 # byebug
    #                 casting_id = new_casting.id
    #                 # render json: new_casting
    #             rescue ActiveRecord::RecordInvalid
    #             # else
    #             #     # byebug
    #             #     render json: { errors: new_casting.errors.full_messages}
    #             end
    #         end
    #     end
    #     # byebug
    #     monologue = Monologue.find_by(id: params[:monologue_id])
        
    #     if monologue
    #         monologue_id = monologue.id
    #         user = monologue.user_id
    #         # render json: monologue
    #     else
    #         all_monologue = Monologue.find_by(role: params[:monologue][:role])
    #         # byebug
    #         if all_monologue
    #             monologue_id = all_monologue.id
    #             user = all_monologue.user_id
    #             # render json: all_monologue
    #         else
    #             new_monologue = Monologue.create(role: params[:monologue][:role], play: params[:monologue][:play], playwright: params[:monologue][:playwright], public: params[:monologue][:public], genre: params[:monologue][:genre], length: params[:monologue][:length], first_line: params[:monologue][:first_line], user_id: params[:monologue][:user_id])
    #             if new_monologue.valid?
    #                 monologue_id = new_monologue.id
    #                 # render json: new_monologue
    #             rescue ActiveRecord::RecordInvalid
    #             # else
    #             #     # byebug
    #             #     render json: { errors: new_monologue.errors.full_messages}
    #             end
    #         end
    #     end
        
    #     # byebug
    #     audition = Audition.create(appointment: params[:appointment], booked: params[:booked], callback: params[:callback], casting_id: casting_id, date: params[:date], location_id: location_id, monologue_id: monologue_id, outfit: params[:outfit], producer: params[:producer], response: params[:response], shows: params[:shows], time: params[:time],)
    #     if audition.valid?
    #         audition_id = audition.id
    #         # render json: audition
    #     rescue ActiveRecord::RecordInvalid
    #     # else
    #     #     # byebug
    #     #     render json: {errors: audition.errors.full_messages}
    #     end
    #     # byebug
    #     people = params[:people].map do |person|
    #         # byebug
    #         person = Person.create(name: person)
    #         if person.valid?
    #             person_id = person.id
    #             # byebug
    #             in_the_room = InTheRoom.create(audition_id: audition_id, person_id: person_id)
    #             # byebug
    #         else
    #             # byebug
    #         end
    #     end
    #     # byebug
    #     user_audition = UserAudition.create(audition_id: audition_id, user_id: @current_user.id)
    #     if user_audition.valid?
    #         # byebug
    #         audition = Audition.find_by(id: user_audition.audition_id)
    #         render json: audition
    #     else
    #         # byebug
    #         render json: {errors: user_audition.errors.full_messages}, status: :unprocessable_entity
    #     end
    # end

    # POST /create
    def create
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
                # byebug
                if new_casting.valid?
                    # byebug
                    casting_id = new_casting.id
                    # render json: new_casting
                # rescue ActiveRecord::RecordInvalid
                else
                    # byebug
                    render json: { errors: new_casting.errors.full_messages}, status: :unprocessable_entity and return
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
                # rescue ActiveRecord::RecordInvalid
                else
                    # byebug
                    render json: { errors: new_monologue.errors.full_messages}, status: :unprocessable_entity and return
                end
            end
        end
        
        # byebug
        audition = Audition.create(appointment: params[:appointment], booked: params[:booked], callback: params[:callback], casting_id: casting_id, date: params[:date], location_id: location_id, monologue_id: monologue_id, outfit: params[:outfit], producer: params[:producer], response: params[:response], shows: params[:shows], time: params[:time],)
        if audition.valid?
            audition_id = audition.id
            # render json: audition
        # rescue ActiveRecord::RecordInvalid
        else
            # byebug
            render json: {errors: audition.errors.full_messages}, status: :unprocessable_entity and return
        end
        # byebug
        people = params[:people].map do |person|
            # byebug
            person = Person.create(name: person)
            if person.valid?
                person_id = person.id
                # byebug
                in_the_room = InTheRoom.create(audition_id: audition_id, person_id: person_id)
            end
        end
        # byebug
        user_audition = UserAudition.create(audition_id: audition_id, user_id: @current_user.id)
        if user_audition.valid?
            # byebug
            audition = Audition.find_by(id: user_audition.audition_id)
            render json: audition
        else
            # byebug
            render json: {errors: user_audition.errors.full_messages}, status: :unprocessable_entity
        end
    end

    # PATCH /update
    def update
        # byebug
        audition = Audition.find_by(id: params[:id])
        # byebug
        update = audition.update(booked: params[:booked], callback: params[:callback], response: params[:response])
        if update
            updated = Audition.find_by(id: params[:id])
            render json: updated
        else
            # byebug
            render json: {errors: audition.errors.full_messages}
        end
    end

    #DELETE /destroy
    def destroy
        # byebug
        audition = Audition.find_by(id: params[:id])
        if audition
            # byebug
            audition.destroy
            render json: audition
        else
            render json: { error: "Audition not found" }, status: :not_found
        end
    end
end
