class InTheRoomsController < ApplicationController
    def index
        in_the_rooms = InTheRoom.all
        render json: in_the_rooms
    end
end
