const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

export async function encurtarLink(url: string, code?: string) {
    const response = await fetch(`${API_URL}/links`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ url, code })
    })

    if (!response.ok) throw new Error ("Erro ao encurtar link")

    return response.json();
}