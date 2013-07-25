require "bundler"
Bundler.require
namespace :site do
  desc "Generate blog files"
  task :generate do
    Jekyll::Site.new(Jekyll.configuration({
      "source"      => ".",
      "destination" => "_site"
    })).process
    
  end


  desc "Generate and publish blog to gh-pages"
  task :publish => [:generate] do
    system "git add ." 
    system "git commit -am 'publish'"
    system "git subtree push --prefix _site origin gh-pages"
  end
end
