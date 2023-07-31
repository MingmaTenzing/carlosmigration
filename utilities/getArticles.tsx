import { supabase } from "../components/supabase/supabaseclient";

export async function getArticles() {
const {data, error} = await supabase.from("Blogs").select("*")
if (data) {
    return data;
}
}