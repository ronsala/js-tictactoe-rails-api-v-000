class GamesController < ApplicationController
  before_action :set_game, only: [:show, :update]

  def index
    binding.pry
    games = Game.all
    render json: games
    binding.pry
  end

  def show
    render json: @game
  end

  def create
    binding.pry
    game = Game.create(game_params)
    render json: game, status: 201
  end

  def update
    @game.update(game_params)
    render json: @game
  end

  private

  def game_params
    params.permit(state: [])
  end

  def set_game
    @game = Game.find(params[:id])
  end
end