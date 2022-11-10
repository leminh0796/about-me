defmodule AboutMe.Repo do
  use Ecto.Repo,
    otp_app: :about_me,
    adapter: Ecto.Adapters.Postgres
end
