defmodule AboutMeWeb.PageView do
  use AboutMeWeb, :view

  def get_my_avatar do
    ~s(background-image: url\("#{get_my_avatar_url()}"\);)
  end

  defp get_my_avatar_url do
    "https://www.gravatar.com/avatar/" <> my_email_md5() <> "?s=200"
  end

  defp my_email_md5 do
    :crypto.hash(:md5, "leminh0796@gmail.com") |> Base.encode16(case: :lower)
  end
end
