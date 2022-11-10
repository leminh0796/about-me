defmodule AboutMeWeb.PageController do
  use AboutMeWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end

  def heart(conn, _) do
    render(conn, "heart.html")
  end
end
