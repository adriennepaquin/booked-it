class CastingsController < ApplicationController
    def index
        casting = Casting.all
        render json: casting
    end
end
