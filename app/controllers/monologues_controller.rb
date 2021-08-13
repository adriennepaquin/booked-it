class MonologuesController < ApplicationController
    # skip_before_action :authorize
    
    def index
        monos = Monologue.where(public: true)
        render json: monos
    end

    def show
        my_monos = Monologue.where(user_id: params[:id])
        render json: my_monos
    end
end
