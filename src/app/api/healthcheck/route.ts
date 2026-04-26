export interface HealthcheckResponse {
  status: "alive";
}

export async function GET() {
  const response: HealthcheckResponse = {
    status: "alive",
  };

  return Response.json(response);
}
