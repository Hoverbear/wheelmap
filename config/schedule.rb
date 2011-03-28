# Use this file to easily define all of your cron jobs.

set :output, File.join(File.expand_path(File.dirname(__FILE__)), "log", "cron_log.log")

job_type :rake,    "cd :path && RAILS_ENV=:environment /home/rails/.rvm/bin/rake :task :output"


every '* 0-1,3-23 * * *' do
  rake "osm:replication:sync", :environment => :production
end

