import { Controller, Get, Param, Query } from '@nestjs/common';
import * as COMPOSICAO_LIST_RESPONSE from './data/composicao-list.json';
import {
  paginated,
  elementWithId,
  SINGLE_META_DEFAULT as meta,
} from './gabster.util';

@Controller('/v2/composicao')
export class ComposicaoController {
  @Get()
  findAll(@Query() query) {
    return paginated(COMPOSICAO_LIST_RESPONSE, query);
  }

  @Get('/:id')
  findById(@Param('id') id: string) {
    const object = elementWithId(COMPOSICAO_LIST_RESPONSE.objects, id);
    return { meta, object };
  }
}
