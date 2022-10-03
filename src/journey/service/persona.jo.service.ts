import { Injectable } from "@nestjs/common";
import { PersonaBsService } from "src/business/service/persona.bs.service";
import { PersonaRegistroRequest } from "src/dto/request/persona.registro.request";
import { ApiResponse } from "src/dto/response/api.response";
import { PersonaResponse } from "src/dto/response/persona.response";

@Injectable()
export class PersonaJoService {

    constructor(
        private personaBsService: PersonaBsService
    ){
    }

    async register(request:PersonaRegistroRequest, operationId:number): Promise<ApiResponse> {
        console.log('[BEGIN] JO register', {operationId});
        let response:ApiResponse = new ApiResponse();
        response.operationCode = operationId;
        const responseBs = await this.personaBsService.register(request, operationId);
        if(responseBs.error == true){
            response.code = 1;
            response.message = responseBs.message;
        } else {
            response.message = 'OK';
            response.content = responseBs.content;
        }
        console.log('[END] JO register', {operationId});
        return response;
    }

    async listar(operationId:number): Promise<ApiResponse> {
        console.log('[BEGIN] JO listar', {operationId});
        let response:ApiResponse = new ApiResponse();
        response.operationCode = operationId;
        const responseBs = await this.personaBsService.listar(operationId);
        if(responseBs.error == true){
            response.code = 1;
            response.message = responseBs.message;
        } else {
            response.message = 'OK';
            response.content = responseBs.content;
        }
        console.log('[END] JO listar', {operationId});
        return response;
    }

}