class LocationsController < ApplicationController

    def index
        locations = Location.all
        render json: locations
    end

    # def create
    #     location = Location.find_by(name: params[:name])

    #     if location
    #         render json: location
    #     else
    #         new_location = Location.create(location_params)

    #         if new_location.valid?
    #             render json: new_location
    #         else
    #             render json: {errors: new_location.errors.full_messages}, status: :unprocessable_entity
    #         end
    #     end
    # end

    private

    def location_params
        params.permit(:name, :address)
    end
end
