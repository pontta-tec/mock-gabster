import { Controller, Get, Param, Query } from '@nestjs/common';
import * as ORCAMENTO_LIST_RESPONSE from './data/orcamento-list.json';
import * as ORCAMENTO_RESPONSE from './data/orcamento.json';
import { paginated } from './gabster.util';

@Controller('/v2/orcamento')
export class OrcamentoController {
  @Get()
  findAll(@Query() query) {
    return paginated(ORCAMENTO_LIST_RESPONSE, query);
  }

  @Get('/:id')
  findById(@Param('id') id: string) {
    ORCAMENTO_RESPONSE[0].orcamento_id = id;
    return ORCAMENTO_RESPONSE;
  }
}
