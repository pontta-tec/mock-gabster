import { Controller, Get, Param, Query } from '@nestjs/common';
import * as PROJETO_LIST_RESPONSE from './data/projeto-list.json';
import * as ORCAMENTO_RESPONSE from './data/orcamento.json';
import {
  paginated,
  elementWithId,
  SINGLE_META_DEFAULT as meta,
} from './gabster.util';

@Controller('/v2/projeto')
export class ProjetoController {
  @Get()
  findAll(@Query() query) {
    return paginated(PROJETO_LIST_RESPONSE, query);
  }

  @Get('/:id')
  findById(@Param('id') id: string) {
    const object = elementWithId(PROJETO_LIST_RESPONSE.objects, id);
    return { meta, object };
  }

  @Get('/:id/orcamento')
  findOrcamentos(@Param('id') id: string) {
    const orcamento = ORCAMENTO_RESPONSE[0];
    orcamento['TRA_projeto_id'] = id;
    return [orcamento];
  }

  @Get('/:projetoId/orcamento/:orcamentoId')
  getOrcamento(
    @Param('projetoId') projetoId: string,
    @Param('orcamentoId') orcamentoId: string,
  ) {
    const orcamento = ORCAMENTO_RESPONSE[0];
    orcamento['orcamento_id'] = orcamentoId;
    orcamento['TRA_projeto_id'] = projetoId;
    return orcamento;
  }
}
