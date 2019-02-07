require 'sinatra'
get '/' do
  	erb :supportwriting
end
configure do
    set :protection, except: [:frame_options]
end