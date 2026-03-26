export async function encurtarLink(url: string, code?: string) {
    const response = await fetch("http://localhost:4000/links", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ url, code })
    })

    if (!response.ok) throw new Error ("Erro ao encurtar link")

    return response.json();
}